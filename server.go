package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func determinListenAddress() (string, error) {
	port := os.Getenv("PORT")
	if port == "" {
		return "", fmt.Errorf("$PORT not set")
	}
	return ":" + port, nil
}

func main() {
	addr, err := determinListenAddress()
	if err != nil {
		log.Fatal(err)
	}

	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/", fs)
	log.Println("Listening on -> " + addr)
	if err := http.ListenAndServe(addr, nil); err != nil {
		panic(err)
	}
}
