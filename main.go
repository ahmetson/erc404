package main

import (
	"embed"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/sakirsensoy/genv"
)

var f embed.FS

func setupRouter() *gin.Engine {
	port := genv.Key("PORT").Default("8080").String()
	host := genv.Key("IMG_HOST").Default(fmt.Sprintf("http://localhost:%s", port)).String()

	// Disable Console Color
	// gin.DisableConsoleColor()
	r := gin.Default()

	// Ping test
	r.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})

	// Get user value
	r.GET("/meta/:id", func(c *gin.Context) {
		id := c.Params.ByName("id")

		attributes := []gin.H{
			{
				"trait_type": "EDITIION",
				"value":      0,
			},
		}

		c.JSON(http.StatusOK, gin.H{
			"description":  "The comic book series “Frog Wars” follows the journey of two frogs",
			"external_url": fmt.Sprintf("https://frog-wars.com/%s", id),
			"image":        fmt.Sprintf("%s/frog.jpg", host),
			"name":         "Frog Wars",
			"attributes":   attributes,
		})
	})

	r.StaticFile("frog.jpg", "./assets/frog.jpg")

	return r
}

func main() {
	port := genv.Key("PORT").Default("8080").String()

	r := setupRouter()
	// Listen and Server in 0.0.0.0:8080
	r.Run(fmt.Sprintf(":%s", port))
}
