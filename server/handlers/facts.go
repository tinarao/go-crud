package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/tinarao/go-crud/db"
	"github.com/tinarao/go-crud/models"
)

type DeleteId struct {
	ID int
}

func Home(c *fiber.Ctx) error {
	data := []models.Fact{}
	db.DB.Db.Find(&data)
	return c.Status(200).JSON(data)
}

func CreateFact(c *fiber.Ctx) error {
	fact := new(models.Fact)
	if err := c.BodyParser(fact); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": err.Error(),
		})
	}

	db.DB.Db.Create(&fact)
	return c.Status(201).JSON(fact)
}

func DeleteFact(c *fiber.Ctx) error {
	id := c.QueryInt("id")
	db.DB.Db.Delete(&models.Fact{}, id)
	return c.Status(200).JSON(fiber.Map{
		"message": "Удалено!",
	})
}
