package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	fmt.Println(strings.Join(os.Args[1:], " "))
	printNubers()
}

func printNubers() {
	for i := 1; i <= 5; i++ {
		fmt.Println(i)
	}
}
