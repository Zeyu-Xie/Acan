DIRS := Acan-Photos Acan-Tools Acan-Docs Acan-Home Acan-Server/Doc Acan-Server/Tool Acan-Server/Photo Acan-Server
BUILD_DIRS := Acan-Photos Acan-Tools Acan-Docs Acan-Home

all: install

install:
	@for dir in $(DIRS); do \
		echo "Installing dependencies in $$dir"; \
		(cd $$dir && npm i); \
	done

build:
	@for dir in $(BUILD_DIRS); do \
		echo "Building in $$dir"; \
		(cd $$dir && npm run build); \
	done

clear:
	@for dir in $(DIRS); do \
		echo "Deleting node_modules in $$dir"; \
		(cd $$dir && rm -rf node_modules); \
	done

.PHONY: all install clear
