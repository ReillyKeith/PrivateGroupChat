# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

class TestUsernameError():
  def setup_method(self, method):
    self.driver = webdriver.Firefox()
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_usernameError(self):
    # Test name: usernameError
    # Step # | name | target | value
    # 1 | open | / | 
    self.driver.get("https://www.1234.ie/")
    # 2 | setWindowSize | 550x691 | 
    self.driver.set_window_size(550, 691)
    # 3 | click | css=a:nth-child(2) > .button | 
    self.driver.find_element(By.CSS_SELECTOR, "a:nth-child(2) > .button").click()
    # 4 | click | css=div:nth-child(2) > .JoinInput | 
    self.driver.find_element(By.CSS_SELECTOR, "div:nth-child(2) > .JoinInput").click()
    # 5 | type | css=div:nth-child(2) > .JoinInput | thisiswaytoolonganameforauser
    self.driver.find_element(By.CSS_SELECTOR, "div:nth-child(2) > .JoinInput").send_keys("thisiswaytoolonganameforauser")
    # 6 | type | css=div > .mt-20 | room
    self.driver.find_element(By.CSS_SELECTOR, "div > .mt-20").send_keys("room")
    # 7 | click | css=.button | 
    self.driver.find_element(By.CSS_SELECTOR, ".button").click()
    # 8 | mouseOver | css=.button | 
    element = self.driver.find_element(By.CSS_SELECTOR, ".button")
    actions = ActionChains(self.driver)
    actions.move_to_element(element).perform()
    # 9 | assertAlert | Username too long... | 
    assert self.driver.switch_to.alert.text == "Username too long..."
  
