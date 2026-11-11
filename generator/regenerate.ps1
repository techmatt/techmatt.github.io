# Regenerates index.html (and the gitignored CV.html) from info/ without opening the WinForms UI.
# Loads the compiled WebGenerator.exe and calls WebPageGenerator.Generate directly.
# Run with Windows PowerShell (.NET Framework), from anywhere:
#   powershell.exe -NoProfile -ExecutionPolicy Bypass -File generator\regenerate.ps1
$root = Split-Path -Parent $PSScriptRoot
$asm = [Reflection.Assembly]::LoadFrom((Join-Path $PSScriptRoot 'bin\Debug\WebGenerator.exe'))
$t = $asm.GetType('WebGenerator.WebPageGenerator')
$g = [Activator]::CreateInstance($t, $true)
# Both paths need a trailing backslash: the generator concatenates file names onto them.
$t.GetMethod('Generate').Invoke($g, @("$root\info\", "$root\")) | Out-Null
"Regenerated $root\index.html and CV.html"
