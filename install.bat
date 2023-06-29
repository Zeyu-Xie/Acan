@echo off

set "DIRS=Acan-Photos Acan-Tools Acan-Docs Acan-Home Acan-Server/Doc Acan-Server/Tool Acan-Server/Photo Acan-Server"
set "BUILD_DIRS=Acan-Photos Acan-Tools Acan-Docs Acan-Home"

if "%~1"=="build" (
    call :build
) else if "%~1"=="clear" (
    call :clear
) else if "%~1"=="install" (
    call :install
)

:install
for %%d in (%DIRS%) do (
    echo Installing dependencies in %%d
    cd /d %%d
    npm i
    cd /d %~dp0
)
exit

:build
for %%d in (%BUILD_DIRS%) do (
    echo Building in %%d
    cd /d %%d
    npm run build
    cd /d %~dp0
)
exit

:clear 
for %%d in (%DIRS%) do (
    echo Deleting node_modules in %%d
    cd /d %%d
    rd /s /q node_modules
    cd /d %~dp0
)
exit