Add-Type -AssemblyName System.IO.Compression.FileSystem

function Read-DocxText($filePath) {
    $zip = [System.IO.Compression.ZipFile]::OpenRead($filePath)
    $entry = $zip.GetEntry('word/document.xml')
    $stream = $entry.Open()
    $reader = New-Object System.IO.StreamReader($stream)
    $xmlContent = $reader.ReadToEnd()
    $reader.Close()
    $stream.Close()
    $zip.Dispose()
    
    # Simple regex to strip XML tags and preserve spaces
    $text = $xmlContent -replace '<w:p[ >]', "`n" -replace '<[^>]+>', ''
    return $text
}

$desktop = [System.Environment]::GetFolderPath('Desktop')
$dir = Get-ChildItem $desktop | Where-Object { $_.Name -like "*10-11-12*" }
Write-Output "Found folder: $($dir.FullName)"

$docxFiles = Get-ChildItem (Join-Path $dir.FullName '*.docx')
for ($i = 0; $i -lt $docxFiles.Count; $i++) {
    $f = $docxFiles[$i]
    Write-Output "Processing: $($f.Name)"
    $txt = Read-DocxText($f.FullName)
    if ($f.Name -like "*10*") {
        [System.IO.File]::WriteAllText('C:\Users\admin\.gemini\antigravity\scratch\hoa12_exam_generator\grade10_matrix_spec.txt', $txt, [System.Text.Encoding]::UTF8)
        Write-Output "Saved grade10_matrix_spec.txt ($($txt.Length) chars)"
    } elseif ($f.Name -like "*MA*TR*") {
        [System.IO.File]::WriteAllText('C:\Users\admin\.gemini\antigravity\scratch\hoa12_exam_generator\grade11_matrix_spec.txt', $txt, [System.Text.Encoding]::UTF8)
        Write-Output "Saved grade11_matrix_spec.txt ($($txt.Length) chars)"
    } else {
        [System.IO.File]::WriteAllText('C:\Users\admin\.gemini\antigravity\scratch\hoa12_exam_generator\grade11_de_cuong.txt', $txt, [System.Text.Encoding]::UTF8)
        Write-Output "Saved grade11_de_cuong.txt ($($txt.Length) chars)"
    }
}
