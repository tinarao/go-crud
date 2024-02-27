package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tinarao/go-crud/db"
)

func main() {
	db.ConnectDB()
	app := fiber.New()

	setupRoutes(app)

	app.Listen(":3000")
}
