package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/tinarao/go-crud/db"
)

func main() {
	db.ConnectDB()
	app := fiber.New()
	app.Use(cors.New())

	setupRoutes(app)

	app.Listen(":3000")
}
