build-docker:
	docker build -t habitus_int .

run-docker:
	docker run -d -p 9000:9000 --name habitus_int --env-file .env habitus_int