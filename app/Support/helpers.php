<?php

if (!function_exists('react_file')) {
    /**
     * Get the generated file name
     *
     * @param  string $file
     * @return string
     */
    function react_file($originalFile)
    {
        $dist = config('react.dist_dir');
        $fileParts = explode('.', $originalFile);
        $allFiles = app('files')->files(base_path('public/' . $dist));
        if (count($fileParts) < 2) {
            return '';
        }
        $fileName = $fileParts[0];
        $fileExt = $fileParts[1];

        $allActualFiles = array_map(function ($fullPath) {
            $fileFragments = explode('/', $fullPath);
            return array_pop($fileFragments);
        }, $allFiles);

        $actualFileName = array_first($allActualFiles, function ($actual) use ($fileName, $fileExt) {
            return (starts_with($actual, $fileName) and ends_with($actual, $fileExt));
        });

        return $actualFileName;
    }
}
if (!function_exists('react_path')) {
    /**
     *  Outputs the path for react with the generated file name
     *
     * @param string $originalFile
     * @return string
     */
    function react_path($originalFile)
    {
        $dist = config('react.dist_dir');
        $actualFileName = react_file($originalFile);
        return $dist . DIRECTORY_SEPARATOR . $actualFileName;
    }
}