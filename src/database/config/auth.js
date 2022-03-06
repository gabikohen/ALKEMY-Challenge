module.exports = {
    secret:process.env.AUTH_SECRET || "domingo",
    expires: process.env.AUTH_EXPIRES || "24hs", 
    rounds:process.env.AUTH_ROUNDS || 10 
}