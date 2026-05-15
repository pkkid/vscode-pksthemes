# Symlink this directory to .vscode/extensions
$ExtDir = Split-Path -Parent (Resolve-Path $PSCommandPath)
$ExtName = Split-Path -Leaf $ExtDir
Write-Host "extdir: $ExtDir"
Write-Host "extname: $ExtName"

$LinkPath = "$env:USERPROFILE\.vscode\extensions\$ExtName"
if (-not (Test-Path $LinkPath)) {
    New-Item -ItemType Junction -Path $LinkPath -Target $ExtDir
    Write-Host "Created junction: $LinkPath -> $ExtDir"
} else {
    Write-Host "Link already exists: $LinkPath"
}
