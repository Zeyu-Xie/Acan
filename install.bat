@echo off

set "DIRS=Acan-Photos Acan-Tools Acan-Docs Acan-Home Acan-Server/Doc Acan-Server/Tool Acan-Server/Photo Acan-Server"
set "BUILD_DIRS=Acan-Photos Acan-Tools Acan-Docs Acan-Home"

:all
call :install
exit /b

:install
for %%d in (%DIRS%) do (
    echo Installing dependencies in %%d
    cd %%d
    npm i
    cd ..
)
exit /b

:build
for %%d in (%BUILD_DIRS%) do (
    echo Building in %%d
    cd %%d
    npm run build
    cd ..
)
exit /b

:clear
for %%d in (%DIRS%) do (
    echo Deleting node_modules in %%d
    cd %%d
    rd /s /q node_modules
    cd ..
)
exit /b

:usage
echo Invalid argument. Usage: script.bat [all^|install^|build^|clear]
exit /b
