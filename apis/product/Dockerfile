# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build product`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t product`.
FROM docker.io/node:22-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system product && \
    adduser --system -G product product

COPY dist/apis/product product/
RUN chown -R product:product .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
# RUN npm --prefix product --omit=dev -f install

WORKDIR file-storage
RUN npm install
CMD ["node", "main.js"]
