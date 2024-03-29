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

class TestLobbyRoomChat():
  def setup_method(self, method):
    self.driver = webdriver.Firefox(executable_path=r'/Users/keithreilly/Documents/GitHub/PrivateGroupChat/automationTest/geckodriver')
    self.vars = {}
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_lobbyRoomChat(self):
    # Test name: Lobby Room Chat
    # Step # | name | target | value
    # 1 | open | / | 
    self.driver.get("https://1234.ie/")
    # 2 | setWindowSize | 1200x664 | 
    self.driver.set_window_size(1200, 664)
    time.sleep(3)
    # 3 | click | css=a:nth-child(1) > .button | 
    self.driver.find_element(By.CSS_SELECTOR, "a:nth-child(1) > .button").click()
    time.sleep(3)
    # 4 | click | css=.input | 
    self.driver.find_element(By.CSS_SELECTOR, ".input").click()
    time.sleep(3)
    # 5 | type | css=.input | Hello
    self.driver.find_element(By.CSS_SELECTOR, ".input").send_keys("Hello")
    time.sleep(3)
    # 6 | sendKeys | css=.input | ${KEY_ENTER}
    self.driver.find_element(By.CSS_SELECTOR, ".input").send_keys(Keys.ENTER)
    time.sleep(3)
    # 7 | click | css=.input | 
    self.driver.find_element(By.CSS_SELECTOR, ".input").click()
    time.sleep(3)
    # 8 | type | css=.input | Thisisatest
    self.driver.find_element(By.CSS_SELECTOR, ".input").send_keys("Thisisatest")
    time.sleep(3)
    # 9 | sendKeys | css=.input | ${KEY_ENTER}
    self.driver.find_element(By.CSS_SELECTOR, ".input").send_keys(Keys.ENTER)
    time.sleep(3)
  
