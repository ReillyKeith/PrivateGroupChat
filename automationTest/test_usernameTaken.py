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

class TestUsernameTaken():
  def setup_method(self, method):
    self.driver = webdriver.Firefox(executable_path=r'/Users/keithreilly/Documents/GitHub/PrivateGroupChat/automationTest/geckodriver')
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_usernameTaken(self):
    # Test name: usernameTaken
    # Step # | name | target | value
    # 1 | open | / | 
    self.driver.get("https://1234.ie/")
    # 2 | setWindowSize | 550x691 | 
    self.driver.set_window_size(550, 691)
    time.sleep(3)
    # 3 | click | css=a:nth-child(2) > .button | 
    self.driver.find_element(By.CSS_SELECTOR, "a:nth-child(2) > .button").click()
    # 4 | click | css=div:nth-child(2) > .JoinInput | 
    self.driver.find_element(By.CSS_SELECTOR, "div:nth-child(2) > .JoinInput").click()
    # 5 | type | css=div:nth-child(2) > .JoinInput | test
    self.driver.find_element(By.CSS_SELECTOR, "div:nth-child(2) > .JoinInput").send_keys("test")
    time.sleep(3)
    # 6 | click | css=div:nth-child(3) | 
    self.driver.find_element(By.CSS_SELECTOR, "div:nth-child(3)").click()
    time.sleep(3)
    # 7 | click | css=div > .mt-20 | 
    self.driver.find_element(By.CSS_SELECTOR, "div > .mt-20").click()
    time.sleep(3)
    # 8 | type | css=div > .mt-20 | test
    self.driver.find_element(By.CSS_SELECTOR, "div > .mt-20").send_keys("test")
    time.sleep(3)
    # 9 | click | css=.button | 
    self.driver.find_element(By.CSS_SELECTOR, ".button").click()
    time.sleep(3)
    # 10 | mouseOver | css=.button | 
    element = self.driver.find_element(By.CSS_SELECTOR, ".button")
    actions = ActionChains(self.driver)
    actions.move_to_element(element).perform()
    # 11 | click | css=div:nth-child(2) > .JoinInput | 
    self.driver.find_element(By.CSS_SELECTOR, "div:nth-child(2) > .JoinInput").click()
    time.sleep(3)
    # 12 | type | css=div:nth-child(2) > .JoinInput | test
    self.driver.find_element(By.CSS_SELECTOR, "div:nth-child(2) > .JoinInput").send_keys("test")
    time.sleep(3)
    # 13 | click | css=div > .mt-20 | 
    self.driver.find_element(By.CSS_SELECTOR, "div > .mt-20").click()
    time.sleep(3)
    # 14 | type | css=div > .mt-20 | test
    self.driver.find_element(By.CSS_SELECTOR, "div > .mt-20").send_keys("test")
    time.sleep(3)
    # 15 | click | css=.button | 
    time.sleep(3)
    self.driver.find_element(By.CSS_SELECTOR, ".button").click()
    # 16 | mouseOver | css=.button | 
    element = self.driver.find_element(By.CSS_SELECTOR, ".button")
    actions = ActionChains(self.driver)
    actions.move_to_element(element).perform()
    # 17 | assertAlert | Username is taken. | 
    assert self.driver.switch_to.alert.text == "Username is taken."
  
