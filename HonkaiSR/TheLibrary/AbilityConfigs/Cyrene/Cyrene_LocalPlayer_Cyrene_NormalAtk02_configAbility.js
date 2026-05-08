const configAbility = {
  "fileName": "Cyrene_LocalPlayer_Cyrene_NormalAtk02",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "IF",
      "conditions": "Ability Has a Target",
      "passed": [
        "Deleted bullshit",
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
        "Deleted bullshit",
        {
          "name": "Shot Fired"
        },
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
  "triggerType": "Free",
  "targetObjectData": {
    "primaryTarget": "Skill Point User(Or NONE)"
  }
}