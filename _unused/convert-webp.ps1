# WebP Batch Converter
# Converts GIF, PNG, and JPG to WebP format

$ErrorActionPreference = "Continue"

Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host "WebP Batch Converter" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# Check FFmpeg
try {
    $null = ffmpeg -version 2>&1
    Write-Host "FFmpeg detected" -ForegroundColor Green
} catch {
    Write-Host "FFmpeg not found. Please install FFmpeg first." -ForegroundColor Red
    exit 1
}

$quality = 85
$compression = 4
$totalConverted = 0
$totalSaved = 0

# Function to convert file
function Convert-ToWebP {
    param([string]$inputPath, [string]$outputPath, [string]$type)
    
    if (Test-Path -Path $outputPath) {
        Write-Host "  Skipping (already exists)" -ForegroundColor Yellow
        return $false
    }
    
    try {
        $inputSize = (Get-Item -Path $inputPath).Length / 1MB
        
        if ($type -eq "animated") {
            ffmpeg -i "$inputPath" -vcodec libwebp -lossless 0 -compression_level $compression -q:v $quality -loop 0 -preset default -an -vsync 0 "$outputPath" -y 2>&1 | Out-Null
        } else {
            ffmpeg -i "$inputPath" -vcodec libwebp -lossless 0 -compression_level $compression -q:v $quality "$outputPath" -y 2>&1 | Out-Null
        }
        
        if (Test-Path -Path $outputPath) {
            $outputSize = (Get-Item -Path $outputPath).Length / 1MB
            $saved = $inputSize - $outputSize
            $percent = [math]::Round(($saved / $inputSize) * 100, 1)
            
            $inSizeMB = [math]::Round($inputSize, 2)
            $outSizeMB = [math]::Round($outputSize, 2)
            Write-Host "  Converted: $inSizeMB MB -> $outSizeMB MB (saved $percent%)" -ForegroundColor Green
            
            return $saved
        } else {
            Write-Host "  Conversion failed" -ForegroundColor Red
            return $false
        }
    } catch {
        Write-Host "  Error: $_" -ForegroundColor Red
        return $false
    }
}

# Convert GIFs
Write-Host "`n[1/3] Converting Animated GIFs..." -ForegroundColor Cyan
Write-Host "------------------------------------------" -ForegroundColor Cyan

$gifs = Get-ChildItem -Path "assets/images/previews" -Filter "*.gif" -File
foreach ($gif in $gifs) {
    $output = $gif.FullName -replace '\.gif$', '.webp'
    Write-Host "Processing: $($gif.Name)" -ForegroundColor Cyan
    
    $saved = Convert-ToWebP -inputPath $gif.FullName -outputPath $output -type "animated"
    if ($saved -ne $false) {
        $totalConverted++
        $totalSaved += $saved
    }
}

# Convert PNGs
Write-Host "`n[2/3] Converting PNG Images..." -ForegroundColor Cyan
Write-Host "------------------------------------------" -ForegroundColor Cyan

$pngs = Get-ChildItem -Path "assets/images" -Filter "*.png" -Recurse -File
foreach ($png in $pngs) {
    $sizeKB = (Get-Item $png.FullName).Length / 1KB
    
    if ($sizeKB -gt 50) {
        $output = $png.FullName -replace '\.png$', '.webp'
        $sizeRounded = [math]::Round($sizeKB, 0)
        Write-Host "Processing: $($png.Name) - $sizeRounded KB" -ForegroundColor Cyan
        
        $saved = Convert-ToWebP -inputPath $png.FullName -outputPath $output -type "static"
        if ($saved -ne $false) {
            $totalConverted++
            $totalSaved += $saved
        }
    } else {
        Write-Host "Skipping: $($png.Name) (too small)" -ForegroundColor Gray
    }
}

# Convert JPGs
Write-Host "`n[3/3] Converting JPG Images..." -ForegroundColor Cyan
Write-Host "------------------------------------------" -ForegroundColor Cyan

$jpgs = Get-ChildItem -Path "assets/images" -Filter "*.jpg" -Recurse -File
foreach ($jpg in $jpgs) {
    $sizeKB = (Get-Item $jpg.FullName).Length / 1KB
    
    if ($sizeKB -gt 50) {
        $output = $jpg.FullName -replace '\.jpg$', '.webp'
        $sizeRounded = [math]::Round($sizeKB, 0)
        Write-Host "Processing: $($jpg.Name) - $sizeRounded KB" -ForegroundColor Cyan
        
        $saved = Convert-ToWebP -inputPath $jpg.FullName -outputPath $output -type "static"
        if ($saved -ne $false) {
            $totalConverted++
            $totalSaved += $saved
        }
    } else {
        Write-Host "Skipping: $($jpg.Name) (too small)" -ForegroundColor Gray
    }
}

# Summary
Write-Host "`n==========================================" -ForegroundColor Cyan
Write-Host "Conversion Complete!" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan
$totalSavedRounded = [math]::Round($totalSaved, 2)
Write-Host "Files converted: $totalConverted" -ForegroundColor Green
Write-Host "Space saved: $totalSavedRounded MB" -ForegroundColor Green
Write-Host "`nOriginal files preserved." -ForegroundColor Gray
Write-Host "WebP files created alongside originals." -ForegroundColor Gray
Write-Host "==========================================`n" -ForegroundColor Cyan
