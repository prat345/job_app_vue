import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event"
import { createTestingPinia } from "@pinia/testing"
import { useUserStore } from "@/stores/user"
import { RouterLinkStub } from "@vue/test-utils"
import { useRoute } from "vue-router"
vi.mock("vue-router")

import MainNav from "@/components/Navigation/MainNav.vue"

// login btn/ sign in action depends on pinia state > need to mock pinia
describe("MainNav", () => {
  const renderMainNav = () => {
    useRoute.mockReturnValue({ name: "Home" })
    const pinia = createTestingPinia({ stubActions: false })

    render(MainNav, {
      global: {
        plugins: [pinia],
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    })
  }

  it("display company name", () => {
    // render(MainNav)
    renderMainNav()
    const companyName = screen.getByText("Logo") // fail if more than 1
    // console.log(companyName)
    expect(companyName).toBeInTheDocument()
  })

  // check nav items value
  it("display menu items for nav", () => {
    // render(MainNav)
    renderMainNav()
    const navMenuItems = screen.getAllByRole("listitem")
    // console.log(navMenuItems)
    const navMenuTexts = navMenuItems.map((item) => item.textContent)
    expect(navMenuTexts).toEqual(["Teams", "Location", "Benefits", "Jobs", "Students"]) // use toEqual when compare arr, toBe with others
  })

  // check login method
  describe("when the user logs in", () => {
    it("display user profile picture", async () => {
      // render(MainNav)
      renderMainNav()
      const userStore = useUserStore()
      // before login (img should not appear)
      let profileImg = screen.queryByRole("img", {
        name: /profile-picture/i // name refer to aria-role (alt for img)
      })
      expect(profileImg).not.toBeInTheDocument()

      const loginButton = screen.getByRole("button", {
        name: /Sign in/i // refer to text in button
      })
      // simulate login
      userStore.isLogin = true
      await userEvent.click(loginButton)
      // after login (img should appear)
      profileImg = screen.queryByRole("img", {
        name: /profile-picture/i // name refer to aria-role (alt for img)
      })
      expect(profileImg).toBeInTheDocument()
    })
  })
})
