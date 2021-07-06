const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;


const UserSchema = new Schema(
  {
    /* Authorization Fields */
    email: {
      index: true,
      type: Schema.Types.String,
      required: true,
    },
    // Hashed by pre save hook
    password: {
      type: Schema.Types.String,
      required: true,
    },
    lastSignin: {
      type: Schema.Types.Mixed,
    },
    lastJWT: {
      type: Schema.Types.Mixed,
    },
    name: {
      type: Schema.Types.String,
      required: true,
    },
    resetToken: {
      type: Schema.Types.String,
    },
    resetPasswordExpires: {
      type: Schema.Types.String,
    }
  },
  { timestamps: true }
);

// Assign Unique IDs scoped to the Organization Level
UserSchema.plugin(AutoIncrement, {
  id: 'id_seq',
  inc_field: 'UserOrgId',
  reference_fields: ['organization'],
});

// Hash passwords with BCrypt before storing
UserSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) return next();

  // Generate a salt
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      return next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err, false);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('users', UserSchema);
