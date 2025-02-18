package entity

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Username string `gorm:"uniqueIndex" valid:"required~Username is required, stringlength(4|100)"`
	Email    string `gorm:"uniqueIndex" valid:"required~Email is required, email~Email is invalid"`
	Password string `valid:"required~Password is required, stringlength(4|100)"`
}