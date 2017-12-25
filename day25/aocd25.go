package main

import "fmt"

type State struct {
	write []int
	move  []int
	next  []string
	name  string
}

func main() {
	steps := 12667664

	a := State{[]int{1, 0}, []int{1, -1}, []string{"B", "C"}, "A"}
	b := State{[]int{1, 1}, []int{-1, 1}, []string{"A", "D"}, "B"}
	c := State{[]int{0, 0}, []int{-1, -1}, []string{"B", "E"}, "C"}
	d := State{[]int{1, 0}, []int{1, 1}, []string{"A", "B"}, "D"}
	e := State{[]int{1, 1}, []int{-1, -1}, []string{"F", "C"}, "E"}
	f := State{[]int{1, 1}, []int{1, 1}, []string{"D", "A"}, "F"}

	now := 0
	out := make([]int, 12667664)

	for ele := range out {
		out[ele] = 0
	}

	current := a
	currentStep := 12667664 / 2
	for steps > now {
		var next string

		if out[currentStep] == 0 {
			out[currentStep] = current.write[0]
			next = current.next[0]
			currentStep = currentStep + current.move[0]
		} else {
			out[currentStep] = current.write[1]
			next = current.next[1]
			currentStep = currentStep + current.move[1]
		}

		if next == "A" {
			current = a
		} else if next == "B" {
			current = b
		} else if next == "C" {
			current = c
		} else if next == "D" {
			current = d
		} else if next == "E" {
			current = e
		} else if next == "F" {
			current = f
		}
		now++
	}

	sum := 0

	for ele := range out {
		if out[ele] == 1 {
			sum++
		}
	}

	fmt.Println(sum)
}
