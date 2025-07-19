# NextJS_Project-
Full Stack NextJS project with Image kit and Next AUTH


<!-- //notes:
bufferCommands:>
bufferCommands is a Mongoose-specific option that controls Mongoose's buffering mechanism for database operations. 
By default, bufferCommands is set to true. This means that if Mongoose is not yet connected to MongoDB, or if the connection temporarily goes down, Mongoose will buffer any database operations (like save(), find(), update(), etc.) and execute them once the connection is established or re-established. This allows you to start using your Mongoose models immediately without explicitly waiting for the connection to be ready.
Setting bufferCommands to false disables this buffering. If the connection is not active, any database operations attempted will immediately result in an error, rather than being buffered and executed later. This can be useful for debugging connection issues or if you want operations to fail immediately when the database is unavailable. -->