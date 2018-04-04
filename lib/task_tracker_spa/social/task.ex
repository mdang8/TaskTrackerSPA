defmodule TaskTrackerSpa.Social.Task do
  use Ecto.Schema
  import Ecto.Changeset


  schema "tasks" do
    field :completed, :boolean, default: false
    field :description, :string
    field :duration, :integer, default: 0
    field :title, :string
    field :assigned_id, :id
    belongs_to :user, TaskTrackerSpa.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(task, attrs) do
    task
    |> cast(attrs, [:title, :description, :duration, :completed, :user_id, :assigned_id])
    |> validate_required([:title, :description, :duration, :completed, :user_id, :assigned_id])
  end
end
