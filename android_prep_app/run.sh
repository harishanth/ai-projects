#!/bin/bash
# Launcher for Android Lead & Staff Interview Prep Studio
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=========================================================="
echo "🤖 Android Lead & Staff Interview Prep Studio"
echo "=========================================================="
echo ""
echo "Choose how to start the app:"
echo "1) Start with local Python Server (http://localhost:8090)"
echo "2) Direct Browser View (file:// mode)"
echo "=========================================================="

if [ "$1" == "--server" ] || [ "$1" == "-s" ]; then
    echo "Starting background server..."
    python3 "$DIR/server.py"
else
    echo "Launching browser..."
    if command -v xdg-open >/dev/null 2>&1; then
        xdg-open "$DIR/index.html" &
    elif command -v sensible-browser >/dev/null 2>&1; then
        sensible-browser "$DIR/index.html" &
    else
        echo "Open $DIR/index.html directly in your browser."
    fi
    echo ""
    echo "Tip: Run '$DIR/run.sh --server' to start with the local Python HTTP server."
fi
