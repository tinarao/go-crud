package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tinarao/go-crud/handlers"
)

func setupRoutes(app *fiber.App) {
	app.Get("/", handlers.Home)

}
