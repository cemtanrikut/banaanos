# banaanOS Architecture Overview

## Overview
banaanOS is a lightweight Linux-based operating system for Raspberry Pi Compute Module 5 (CM5).
It combines:
- **Frontend:** React (Vite) GUI Shell running under Wayland (cage)
- **Backend:** Go-based core services
- **Build system:** Custom Raspberry Pi image generator

## Core Directories
- `apps/` → React applications (Shell, Settings)
- `services/` → Go microservices (Core, Net, Audio)
- `pkg/` → Shared Go packages
- `build/` → Image builder, scripts, setup
- `assets/` → Icons, branding
- `docs/` → Documentation

## Communication
Frontend ↔ Backend communication via WebSocket and REST (fallback).
