Add-Type -AssemblyName System.IO.Compression.FileSystem

$folder = "C:\Users\admin\Desktop\HÓA 10-11-12"
$files = Get-ChildItem -Path $folder

foreach ($f in $files) {
    Write-Host "FILE: $($f.Name)"
    if ($f.Extension -eq ".docx") {
        $zip = [System.IO.Compression.ZipFile]::OpenRead($f.FullName)
        $docEntry = $zip.GetEntry("word/document.xml")
        if ($docEntry) {
            $stream = $docEntry.Open()
            $reader = New-Object System.IO.StreamReader($stream)
            $xmlText = $reader.ReadToEnd()
            $reader.Close()
            $stream.Close()
            
            # Simple regex to extract text and see tables
            [xml]$xml = $xmlText
            $tables = $xml.SelectNodes("//w:tbl", $null)
            Write-Host "  Found $($tables.Count) tables in $($f.Name)"
            
            # Save raw xml to examine
            $outPath = "C:\Users\admin\.gemini\antigravity\scratch\hoa12_exam_generator\raw_" + $f.BaseName + ".xml"
            $xmlText | Out-File -FilePath $outPath -Encoding utf8
        }
        $zip.Dispose()
    }
}
