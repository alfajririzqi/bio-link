# ============================================
# Batch Convert Images to WebP
# ============================================
# This script converts GIF, PNG, and JPG to WebP format
# Preserves original files and creates WebP versions

$ErrorActionPreference = "Continue"

# Color output functions
function Write-Success { Write-Host $args -ForegroundColor Green }
function Write-Info { Write-Host $args -ForegroundColor Cyan }
function Write-Warning { Write-Host $args -ForegroundColor Yellow }
function Write-Error { Write-Host $args -ForegroundColor Red }

# Check if FFmpeg is available
try {
    $null = ffmpeg -version 2>&1
    Write-Success "✓ FFmpeg detected"
} catch {
    Write-Error "✗ FFmpeg not found. Please install FFmpeg first."
    exit 1
}

Write-Info "`n=========================================="
Write-Info "WebP Batch Converter"
Write-Info "=========================================="

# Configuration
$quality = 85  # WebP quality (0-100, higher = better quality)
$compression = 4  # Compression level (0-6, higher = slower but smaller)

# Statistics
$totalConverted = 0
$totalSaved = 0

# Function to convert file to WebP
function Convert-ToWebP {
    param(
        [string]$inputPath,
        [string]$outputPath,
        [string]$type
    )
    
    if (Test-Path $outputPath) {
        Write-Warning "  → Skipping (WebP already exists)"
        return $false
    }
    
    try {
        $inputSize = (Get-Item $inputPath).Length / 1MB
        
        if ($type -eq "animated") {
            # Animated GIF to WebP
            ffmpeg -i "$inputPath" -vcodec libwebp -lossless 0 -compression_level $compression -q:v $quality -loop 0 -preset default -an -vsync 0 "$outputPath" -y 2>&1 | Out-Null
        } else {
            # Static image to WebP
            ffmpeg -i "$inputPath" -vcodec libwebp -lossless 0 -compression_level $compression -q:v $quality "$outputPath" -y 2>&1 | Out-Null
        }
        
        if (Test-Path $outputPath) {
            $outputSize = (Get-Item $outputPath).Length / 1MB
            $saved = $inputSize - $outputSize
            $percentSaved = [math]::Round(($saved / $inputSize) * 100, 1)
            
            Write-Success "  ✓ Converted: $([math]::Round($inputSize, 2)) MB → $([math]::Round($outputSize, 2)) MB (saved $percentSaved%)"
            
            return $saved
        } else {
            Write-Error "  ✗ Conversion failed"
            return $false
        }
    } catch {
        Write-Error "  ✗ Error: $_"
        return $false
    }
}

# Convert Animated GIFs
Write-Info "`n[1/3] Converting Animated GIFs..."
Write-Info "Quality: $quality | Compression: $compression"
Write-Info "------------------------------------------"

$gifs = Get-ChildItem -Path "assets/images/previews" -Filter "*.gif" -File
foreach ($gif in $gifs) {
    $outputPath = $gif.FullName -replace '\.gif$', '.webp'
    Write-Info "Processing: $($gif.Name)"
    
    $saved = Convert-ToWebP -inputPath $gif.FullName -outputPath $outputPath -type "animated"
    if ($saved -ne $false) {
        $totalConverted++
        $totalSaved += $saved
    }
}

# Convert Static PNGs
Write-Info "`n[2/3] Converting PNG Images..."
Write-Info "------------------------------------------"

$pngs = Get-ChildItem -Path "assets/images" -Filter "*.png" -Recurse -File
foreach ($png in $pngs) {
    $size = (Get-Item $png.FullName).Length / 1KB
    
    # Only convert if larger than 50 KB
    if ($size -gt 50) {
        $outputPath = $png.FullName -replace '\.png$', '.webp'
        $sizeKB = [math]::Round($size, 0)
        Write-Info ("Processing: " + $png.Name + " (" + $sizeKB + " KB)")
        
        $saved = Convert-ToWebP -inputPath $png.FullName -outputPath $outputPath -type "static"
        if ($saved -ne $false) {
            $totalConverted++
            $totalSaved += $saved
        }
    } else {
        $sizeKB = [math]::Round($size, 0)
        Write-Info ("Skipping: " + $png.Name + " (too small, " + $sizeKB + " KB)")
    }
}

# Convert Static JPGs
Write-Info "`n[3/3] Converting JPG Images..."
Write-Info "------------------------------------------"

$jpgs = Get-ChildItem -Path "assets/images" -Filter "*.jpg" -Recurse -File
foreach ($jpg in $jpgs) {
    $size = (Get-Item $jpg.FullName).Length / 1KB
    
    # Only convert if larger than 50 KB
    if ($size -gt 50) {
        $outputPath = $jpg.FullName -replace '\.jpg$', '.webp'
        $sizeKB = [math]::Round($size, 0)
        Write-Info ("Processing: " + $jpg.Name + " (" + $sizeKB + " KB)")
        
        $saved = Convert-ToWebP -inputPath $jpg.FullName -outputPath $outputPath -type "static"
        if ($saved -ne $false) {
            $totalConverted++
            $totalSaved += $saved
        }
    } else {
        $sizeKB = [math]::Round($size, 0)
        Write-Info ("Skipping: " + $jpg.Name + " (too small, " + $sizeKB + " KB)")
    }
}

# Summary
Write-Info "`n=========================================="
Write-Success "Conversion Complete!"
Write-Info "=========================================="
Write-Success "Files converted: $totalConverted"
Write-Success "Space saved: $([math]::Round($totalSaved, 2)) MB"
Write-Info "`nOriginal files are preserved."
Write-Info "WebP files created alongside originals."
Write-Info "`nNext steps:"
Write-Info "1. Test WebP files in browser"
Write-Info "2. Update HTML/JS to use WebP with fallback"
Write-Info "3. Delete original files if WebP works well"
Write-Info "==========================================`n"
