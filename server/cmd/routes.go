package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tinarao/go-crud/handlers"
)

func setupRoutes(app *fiber.App) {
	app.Get("/get", handlers.Home)
	app.Post("/add", handlers.CreateFact)
	app.Delete("/delete", handlers.DeleteFact)
}
