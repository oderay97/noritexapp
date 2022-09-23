# -*- coding: utf-8 -*-
"""
Created on Tue Sep 20 21:18:16 2022

"""


import pandas as pd 
import numpy as np
from collections import defaultdict


m = pd.read_excel("file.xlsx", header=None).to_numpy()

# =============================================================================
# La clase SpreadsheetConverter traduce una celda con la forma 'A1' a una
# coordenada de matriz m[0][0]
# =============================================================================

class SpreadsheetConverter(object):
    
    def __init__(self, m:np.array, cell_ref:str):
        
        self.m = m   # matriz con máximo 26 "columnas"
        self.cell_ref = cell_ref # celda con forma 'A1'


    def array_coord(self) -> str:
        r1 = self.to_cols()
        r2 = self.to_rows()
        
        r ="m[{}][{}]".format(r2, r1)
        
        return r
    
    def array_query(self) -> str:
        r1 = self.to_cols()
        r2 = self.to_rows()
        
        r = m[r2][r1]
        
        return r
    
    
    @classmethod
    def to_rows(self) -> int :
        dict1 = defaultdict(dict)
        for i in range(m.shape[0]):
            dict1[i] = i - 1
            
        
        row = dict1[int(cell_ref[1:])]
        
        return row
    
    @classmethod
    def to_cols(self) -> int:
        dict2 = {'A':0,'B':1,'C':2,'D':3,'E':4,'F':5,
                'G':6,'H':7,'I':8,'J':9,'K':10,'L':11,
                'M':12,'N':13,'O':14,'P':15,'Q':16,'R':17,
                'S':18,'T':19,'U':20, 'V':21,'W':22,'X':23,
                'Y':24,'Z':25}
        
        col = dict2[cell_ref[0].upper()]
        
        return col
        

##############################################################################

cell_ref = "Z25"
sc = SpreadsheetConverter(m, cell_ref)

sc.array_coord() 
sc.array_query()









