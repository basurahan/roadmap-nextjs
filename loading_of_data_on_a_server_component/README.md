# Running the project
1. npm install
2. npm run dev
3. navigate to localhost:3000/data
4. notice the console when loading the page check if fetch hit the cache or it was skipped
5. change the value of the cache header of the fetch api to explor on different values

fetch can also be a factor that the page will be dynamically rendered or statically rendered

| Header               | Explanation                                              |
|----------------------|----------------------------------------------------------|
| cache: "no-store"    | automatically the compoentn will be dynamically rendered |
| cache: not specified | automatically the component will be statically rendered  |
| cache: "force-cache" | automatically the component will be statically rendered  |

Right now the fetch api is the best way to go in loading data because caching is automatically handled but if we want to use other ways like using third party http clients or just directly querying the database then we can use unstable cache. Personally I would be using only fetch api so I will not discuss it any further