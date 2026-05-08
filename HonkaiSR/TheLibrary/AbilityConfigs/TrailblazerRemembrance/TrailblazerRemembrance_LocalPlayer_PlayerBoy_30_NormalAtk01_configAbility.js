const configAbility = {
  "fileName": "TrailblazerRemembrance_LocalPlayer_PlayerBoy_30_NormalAtk01",
  "skillTrigger": "NormalAtk",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Shot Fired",
      "execute": [
        {
          "name": "Overworld Attack Instance"
        }
      ],
      "projectileFinished": [
        {
          "name": "Overworld Attack Instance"
        }
      ]
    }
  ],
  "onAbortReg": [],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  },
  "realTargetData": {
    "primaryTarget": "Select Hostile Target"
  }
}