class Solution:     # line 1
	def NBitBinary(self, n):
		res = []
		
		def oneorzero(string, length, zeros):
		    if length == n:
		        res.append(string)
		        return
		    
		    oneorzero(string+'1', length+1, zeros)
		    
		    if (length-zeros) > zeros:
		        oneorzero(string+'0', length+1, zeros+1)
        
        oneorzero('1', 1, 0)
        return res