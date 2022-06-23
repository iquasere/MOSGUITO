import unittest
import json


def dicts_are_equivalent(dic1: dict, dic2: dict) -> bool:
    are_equivalent = True
    if dic1.keys() == dic2.keys():
        for key in dic1.keys():
            if type(dic1[key]) != type(dic2[key]):
                return False
            if type(dic1[key]) == dict:
                are_equivalent = dicts_are_equivalent(dic1[key], dic2[key])
    else:
        return False
    return are_equivalent


class TestConfigs(unittest.TestCase):

    def test_default_config(self):
        default = json.load(open('src/utils/defaultValues.json'))

    def test_empty_config(self):
        empty =