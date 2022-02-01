# You are climbing a staircase. It takes n steps to reach the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


def climbStairs(n: int) -> int:
    if n < 2: 
        return 1
    i = 2
    dp = {
                0: 1,
                1: 1
                } 
    while i < n+1:
        dp[i] = dp[i-1] + dp[i-2]
        i += 1
    return dp[n]

print(climbStairs(5))