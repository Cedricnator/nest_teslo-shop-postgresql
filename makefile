
IMAGE_REPO ?= teslo-shop
IMAGE_TAG ?= latest

.PHONY: image
image:  ## Build container image from Dockerfile 
	docker build . --file build/Dockerfile --tag $(IMAGE_REPO):$(IMAGE_TAG)

.PHONY: push
push: image
	docker push $(IMAGE_REPO):$(IMAGE_TAG)

# Inicia todos los servicios
.PHONY: up
up:
	docker-compose up -d

# Construye todos los servicios
.PHONY: build
build:
	docker-compose build

# Apaga todos los servicios
.PHONY: down
down:
	docker-compose down

# Remueve la configuracion anterior y crea uno nuevo	
# Remueve la configuracion anterior y crea uno nuevo, incluyendo volumes
.PHONY: recreate
recreate: down-volumes build up

# Remueve volumes y contenedores
.PHONY: down-volumes
down-volumes:
	docker-compose down -v