#!/bin/bash
set -e
echo "⚙️ Applying database migrations..."
dotnet ef database update || echo "Migration failed or already applied."
echo "✅ Starting application..."
exec dotnet WebApp.dll