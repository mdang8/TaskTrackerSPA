defmodule TaskTrackerSpaWeb.TokenView do
  use TaskTrackerSpaWeb, :view

  def render("token.json", %{user: user, token: token}) do
    %{
      user_id: user.id,
      name: user.name,
      token: token,
    }
  end
end
