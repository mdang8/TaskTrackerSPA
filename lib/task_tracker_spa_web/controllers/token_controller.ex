defmodule TaskTrackerSpaWeb.TokenController do
  use TaskTrackerSpaWeb, :controller
  alias TaskTrackerSpa.Accounts.User

  action_fallback TaskTrackerSpaWeb.FallbackController

  def create(conn, %{"name" => name, "pass" => pass}) do
    with {:ok, %User{} = user} <- TaskTrackerSpa.Accounts.get_and_auth_user(name, pass) do
      token = Phoenix.Token.sign(conn, "auth_token", user.id)
      conn
      |> put_status(:created)
      |> render("token.json", user: user, token: token)
    end
  end
end
