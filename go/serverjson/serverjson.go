package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type JobStatus int

const (
	Requested JobStatus = iota
	Scheduled
	Running
	Finished
	Error
	Paused
	Canceled
)

type Job struct {
	ID     string
	Status JobStatus
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe("localhost:8000", nil))
}

func handler(w http.ResponseWriter, r *http.Request) {
	var jobs = []Job{
		{ID: "1", Status: Finished},
		{ID: "2", Status: Running},
		{ID: "3", Status: Running},
		{ID: "4", Status: Error},
		{ID: "5", Status: Canceled},
		{ID: "6", Status: Paused},
	}

	b, err := json.Marshal(jobs)
	if err != nil {
		fmt.Println("err:", err)
	}

	fmt.Fprintf(w, "%s", b)
}
