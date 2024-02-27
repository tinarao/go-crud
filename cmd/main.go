package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tinarao/go-crud/db"
)

func main() {
	db.ConnectDB()
	app := fiber.New()

	setupRoutes(app)

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("yffj")
	})

	app.Listen(":3000")
}
