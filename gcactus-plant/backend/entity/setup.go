package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB


func DB() *gorm.DB {
	return db
}

func SetupDatabase() (*gorm.DB, error) {
	var err error
	var database *gorm.DB
	database, err = gorm.Open(sqlite.Open("Database_gcactus.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	database.AutoMigrate(
		&User{},
	)
	db = database
	return database, nil

}