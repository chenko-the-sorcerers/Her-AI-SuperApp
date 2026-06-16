.PHONY: all dev start clean help

# ============================================================
# HerAI Fellowship - Makefile
# ============================================================

help:
	@echo "HerAI Fellowship - Available Commands"
	@echo ""
	@echo "  make dev        Start all local dev services"
	@echo "  make start-spa  Start SPA dev server (Node.js)"
	@echo "  make start-sig  Start Go signaling service"
	@echo "  make build-sig  Build signaling binary"
	@echo "  make clean      Remove built artifacts"
	@echo "  make check      Health check all running services"
	@echo "  make install    Install Go dependencies"
	@echo ""

# Start everything (recommended: run in separate terminals)
dev:
	@echo "=== Starting HerAI Development ==="
	@echo ""
	@echo "Run these in separate terminals:"
	@echo ""
	@echo "  Terminal 1: make start-spa"
	@echo "  Terminal 2: make start-sig"
	@echo ""

# SPA dev server
start-spa:
	node server.js

# Go signaling service
start-sig:
	cd signaling && go run .

# Build signaling binary
build-sig:
	cd signaling && go build -o herai-signaling .
	@echo "Binary built: signaling/herai-signaling"

# Install Go dependencies
install:
	cd signaling && go mod download

# Health checks
check:
	@echo "=== Health Checks ==="
	@echo ""
	@echo -n "SPA server (localhost:3000): "
	@curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000/ 2>/dev/null || echo "NOT RUNNING"
	@echo ""
	@echo -n "Signaling (localhost:8080): "
	@curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8080/healthz 2>/dev/null || echo "NOT RUNNING"
	@echo ""
	@echo -n "Messaging (localhost:8091): "
	@curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:8091/healthz 2>/dev/null || echo "NOT RUNNING / NOT BUILT"
	@echo ""

# Clean build artifacts
clean:
	rm -f signaling/herai-sigknaling
	@echo "Cleaned."
