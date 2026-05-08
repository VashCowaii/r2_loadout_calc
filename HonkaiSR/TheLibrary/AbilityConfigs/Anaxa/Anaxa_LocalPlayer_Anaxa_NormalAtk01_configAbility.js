const configAbility = {
  "fileName": "Anaxa_LocalPlayer_Anaxa_NormalAtk01",
  "skillTrigger": "NormalAtk",
  "abilityType": "Basic ATK",
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        {
          "name": "Shot Fired"
        },
        {
          "name": "Shot Fired",
          "projectileFinished": [
            {
              "name": "Overworld Attack Instance"
            }
          ]
        }
      ],
      "failed": [
        {
          "name": "Shot Fired"
        },
        {
          "name": "Shot Fired",
          "projectileFinished": [
            {
              "name": "Overworld Attack Instance"
            }
          ]
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