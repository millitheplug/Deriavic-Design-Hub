.PHONY: install dev dev-api dev-mockup build typecheck clean

install:
	pnpm install

dev:
	PORT=5173 BASE_PATH=/ pnpm --filter @workspace/deriavic-apparel run dev

dev-api:
	pnpm --filter @workspace/api-server run dev

dev-mockup:
	PORT=5174 BASE_PATH=/ pnpm --filter @workspace/mockup-sandbox run dev

build:
	pnpm run build

typecheck:
	pnpm run typecheck

clean:
	rm -rf node_modules artifacts/*/node_modules artifacts/*/dist
