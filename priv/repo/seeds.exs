# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     TaskTrackerSpa.Repo.insert!(%TaskTrackerSpa.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

defmodule Seeds do
  alias TaskTrackerSpa.Repo
  alias TaskTrackerSpa.Accounts.User
  alias TaskTrackerSpa.Social.Task

  def run do
    Repo.delete_all(User)
    a = Repo.insert!(%User{name: "Bob"})
    b = Repo.insert!(%User{name: "Sharon"})
    c = Repo.insert!(%User{name: "Sam"})
    d = Repo.insert!(%User{name: "George"})

    Repo.delete_all(Task)

    Repo.insert!(%Task{
      user_id: a.id,
      assigned_id: a.id,
      title: "#{a.name}'s Task",
      description: "This is a task for #{a.name}.",
      completed: false,
      duration: 15
    })

    Repo.insert!(%Task{
      user_id: b.id,
      assigned_id: b.id,
      title: "#{b.name}'s Task",
      description: "This is a task for #{b.name}.",
      completed: false,
      duration: 0
    })
  end
end

Seeds.run
