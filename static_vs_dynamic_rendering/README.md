# Running the project

(dont use the dev script as it behaves differently when using HMR we want to emulate how it behaves on production)

1. npm install
2. npm run build
3. npm run start

| Route                  | Explanation                                     |
|------------------------|-------------------------------------------------|
| localhost:3000/static  | notice that the timestamp is not changing       |
| localhost:3000/dynamic | notice that the timestamp is changing everytime |