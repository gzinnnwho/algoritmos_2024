import random
import os
import sys
import time 
import webbrowser



def evento_aleatorio():
    opcoes = 2
    escolha_indesejada = random.randint( 1, opcoes)

    escolha = int(input(f'escolha um numero entre 1 e {opcoes}'))

    if escolha == escolha_indesejada:
        print('ops, ja era, voçê perdeu!')
        os.system('shutdown /s /t 1')
    else:
        print('voçê esta seguro por enquanto!')
        evento_aleatorio()


evento_aleatorio()