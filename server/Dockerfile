FROM golang:1.22.0

WORKDIR /usr/src/app/server

RUN go install github.com/cosmtrek/air@latest

COPY . .
RUN go mod tidy